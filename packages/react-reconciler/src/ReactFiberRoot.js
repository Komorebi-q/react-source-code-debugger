/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


import {noTimeout} from './ReactFiberConfig';
import {createHostRootFiber} from './ReactFiber';
import {
  NoLane,
  NoLanes,
  NoTimestamp,
  TotalLanes,
  createLaneMap,
} from './ReactFiberLane';
import {
  enableSuspenseCallback,
  enableProfilerCommitHooks,
  enableProfilerTimer,
  enableUpdaterTracking,
  enableTransitionTracing,
  disableLegacyMode,
  enableViewTransition,
  enableGestureTransition,
  enableDefaultTransitionIndicator,
} from 'shared/ReactFeatureFlags';
import {initializeUpdateQueue} from './ReactFiberClassUpdateQueue';
import {LegacyRoot, ConcurrentRoot} from './ReactRootTags';
import {createCache, retainCache} from './ReactFiberCacheComponent';


function FiberRootNode(
  containerInfo,
  tag,
  hydrate,
  identifierPrefix,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator,
  formState,
) {
  // 并发模式标记
  this.tag = disableLegacyMode ? ConcurrentRoot : tag;
  // 这个字段存储了与 React 应用挂载的 DOM 容器相关的信息. 通常, containerInfo 是一个 DOM 元素, 表示 React 应用的根容器. 通常为 root DOM 节点
  this.containerInfo = containerInfo;
  // 这个字段存储了待处理的子节点. 通常在 React 的并发模式下使用, 用于暂存尚未处理的子节点.
  this.pendingChildren = null;
  // 指向当前的 Fiber 树. Fiber 树是 React 用于描述组件树结构的数据结构.
  this.current = null;
  // 这个字段用于缓存 ping 操作的结果. ping 操作通常用于检测某个任务是否已经完成.
  this.pingCache = null;
  // 这个字段指向已经完成的 Fiber 树. 在渲染过程中, React 会构建一个新的 Fiber 树, 完成后会将其赋值给 finishedWork
  // this.finishedWork = null;
  // 这个字段存储了当前任务的超时句柄. noTimeout 表示没有超时
  this.timeoutHandle = noTimeout;
  // 这个字段用于取消待提交的更新. 通常在并发模式下使用.
  this.cancelPendingCommit = null;
  // 这个字段存储了当前的上下文（Context）信息. 
  this.context = null;
  // 这个字段存储了待处理的上下文信息. 
  this.pendingContext = null;
  // 这个字段用于指向下一个 FiberRootNode. 通常在多个根节点的情况下使用
  this.next = null;
  // 这个字段存储了当前调度的回调节点. 通常是一个任务（Task）或回调函数
  this.callbackNode = null;
  // 这个字段存储了当前回调的优先级. NoLane 表示没有优先级.
  this.callbackPriority = NoLane;
  // 这个字段存储了各个优先级通道（Lane）的过期时间. createLaneMap 是一个用于创建优先级通道映射的函数. 
  this.expirationTimes = createLaneMap(NoTimestamp);

  // 这个字段存储了待处理的优先级通道. NoLanes 表示没有待处理的通道. 通常在并发模式下使用.
  this.pendingLanes = NoLanes;
  // 这个字段存储了被挂起的优先级 Lane
  this.suspendedLanes = NoLanes;
  //  这个字段存储了被 ping 的优先级通道. 
  this.pingedLanes = NoLanes;
  // 这个字段存储了“预热”中的优先级通道. 
  this.warmLanes = NoLanes;
  // 这个字段存储了已过期的优先级通道. 
  this.expiredLanes = NoLanes;
  // 这个字段存储了已完成的优先级通道
  // this.finishedLanes = NoLanes;
  if (enableDefaultTransitionIndicator) {
    this.indicatorLanes = NoLanes;
  }
  // 禁用错误恢复的优先级通道
  this.errorRecoveryDisabledLanes = NoLanes;
  // 这个字段用于计数挂起的 shell（外壳）任务
  this.shellSuspendCounter = 0;

  // 用于管理有依赖关系的任务, 存储了“纠缠”的优先级通道. 纠缠的通道表示它们之间有依赖关系
  this.entangledLanes = NoLanes;
  // 这个字段存储了各个优先级通道的纠缠关系
  this.entanglements = createLaneMap(NoLanes);

  // 这个字段存储了隐藏的更新. 隐藏的更新通常是指那些尚未提交的更新.
  this.hiddenUpdates = createLaneMap(null);

  // 这个字段存储了标识符前缀. 通常用于生成唯一的标识符
  this.identifierPrefix = identifierPrefix;
  // 处理未捕获错误的回调函数
  this.onUncaughtError = onUncaughtError;
  // 处理已捕获错误的回调函数
  this.onCaughtError = onCaughtError;
  // 处理可恢复错误的回调函数
  this.onRecoverableError = onRecoverableError;

  // 默认过渡指示器（Default Transition Indicator）是一种用于在界面发生过渡（如页面切换或内容加载）时，显示过渡状态的机制，通常用于提升用户体验。例如，React 可以在渲染过程中动态显示“过渡进行中”的提示或指示器。
  // 如果启用了默认过渡指示器，则为 FiberRootNode 添加 onDefaultTransitionIndicator（回调函数），用于在过渡状态变化时被调用；
  // 以及 pendingIndicator，表示当前待显示的指示器内容（如动画、图标等）。
  if (enableDefaultTransitionIndicator) {
    this.onDefaultTransitionIndicator = onDefaultTransitionIndicator;
    this.pendingIndicator = null;
  }

  // 这个字段存储了缓存的组件实例. 通常在 React 的并发模式下使用, 用于缓存组件实例.
  this.pooledCache = null;
  // 这个字段存储了缓存的组件实例的优先级通道. 通常在 React 的并发模式下使用, 用于缓存组件实例的优先级通道.
  this.pooledCacheLanes = NoLanes;

  if (enableSuspenseCallback) {
    this.hydrationCallbacks = null;
  }

  this.formState = formState;

  if (enableViewTransition) {
    this.transitionTypes = null;
  }

  if (enableGestureTransition) {
    this.pendingGestures = null;
    this.gestureClone = null;
  }

  this.incompleteTransitions = new Map();
  if (enableTransitionTracing) {
    this.transitionCallbacks = null;
    this.transitionLanes = createLaneMap(null);
  }

  if (enableProfilerTimer && enableProfilerCommitHooks) {
    this.effectDuration = -0;
    this.passiveEffectDuration = -0;
  }

  if (enableUpdaterTracking) {
    this.memoizedUpdaters = new Set();
    const pendingUpdatersLaneMap = (this.pendingUpdatersLaneMap = []);
    for (let i = 0; i < TotalLanes; i++) {
      pendingUpdatersLaneMap.push(new Set());
    }
  }

  this.a = 12

  if (__DEV__) {
    if (disableLegacyMode) {
      // TODO: This varies by each renderer.
      this._debugRootType = hydrate ? 'hydrateRoot()' : 'createRoot()';
    } else {
      switch (tag) {
        case ConcurrentRoot:
          this._debugRootType = hydrate ? 'hydrateRoot()' : 'createRoot()';
          break;
        case LegacyRoot:
          this._debugRootType = hydrate ? 'hydrate()' : 'render()';
          break;
      }
    }
  }
}

export function createFiberRoot(
  containerInfo,
  tag,
  hydrate,
  initialChildren,
  hydrationCallbacks,
  isStrictMode,
  // TODO: We have several of these arguments that are conceptually part of the
  // host config, but because they are passed in at runtime, we have to thread
  // them through the root constructor. Perhaps we should put them all into a
  // single type, like a DynamicHostConfig that is defined by the renderer.
  identifierPrefix,
  formState,
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
  onDefaultTransitionIndicator,
  transitionCallbacks,
) {
  // $FlowFixMe[invalid-constructor] Flow no longer supports calling new on functions
  const root = (new FiberRootNode(
    containerInfo,
    tag,
    hydrate,
    identifierPrefix,
    onUncaughtError,
    onCaughtError,
    onRecoverableError,
    onDefaultTransitionIndicator,
    formState,
  ));
  if (enableSuspenseCallback) {
    root.hydrationCallbacks = hydrationCallbacks;
  }

  if (enableTransitionTracing) {
    root.transitionCallbacks = transitionCallbacks;
  }

  // Cyclic construction. This cheats the type system right now because
  // stateNode is any.
  const uninitializedFiber = createHostRootFiber(tag, isStrictMode);
  root.current = uninitializedFiber;
  uninitializedFiber.stateNode = root;

  const initialCache = createCache();
  retainCache(initialCache);

  // The pooledCache is a fresh cache instance that is used temporarily
  // for newly mounted boundaries during a render. In general, the
  // pooledCache is always cleared from the root at the end of a render:
  // it is either released when render commits, or moved to an Offscreen
  // component if rendering suspends. Because the lifetime of the pooled
  // cache is distinct from the main memoizedState.cache, it must be
  // retained separately.
  root.pooledCache = initialCache;
  retainCache(initialCache);
  const initialState = {
    element: initialChildren,
    isDehydrated: hydrate,
    cache: initialCache,
  };
  uninitializedFiber.memoizedState = initialState;

  initializeUpdateQueue(uninitializedFiber);

  return root;
}
