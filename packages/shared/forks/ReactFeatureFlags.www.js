/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


// Re-export dynamic flags from the www version.
const dynamicFeatureFlags = require('ReactFeatureFlags');

export const {
  alwaysThrottleRetries,
  disableLegacyContextForFunctionComponents,
  disableSchedulerTimeoutInWorkLoop,
  enableEffectEventMutationPhase,
  enableInfiniteRenderLoopDetection,
  enableNoCloningMemoCache,
  enableObjectFiber,
  enableRetryLaneExpiration,
  enableTransitionTracing,
  retryLaneExpirationMs,
  syncLaneExpirationMs,
  transitionLaneExpirationMs,
  enableViewTransition,
  enableScrollEndPolyfill,
  enableFragmentRefs,
  enableFragmentRefsScrollIntoView,
  enableFragmentRefsTextNodes,
  enableInternalInstanceMap,
  enableParallelTransitions,
} = dynamicFeatureFlags;

// On WWW, __EXPERIMENTAL__ is used for a new modern build.
// It's not used anywhere in production yet.

export const enableProfilerTimer = __PROFILE__;
export const enableProfilerCommitHooks = __PROFILE__;
export const enableProfilerNestedUpdatePhase = __PROFILE__;
export const enableUpdaterTracking = __PROFILE__;
export const enableTrustedTypesIntegration = true;
export const enableSuspenseAvoidThisFallback = true;

export const enableAsyncDebugInfo = true;
export const enableCPUSuspense = true;
export const enableMoveBefore = false;
export const disableInputAttributeSyncing = false;
export const enableLegacyFBSupport = true;

export const enableYieldingBeforePassive = false;

export const enableThrottledScheduling = false;

export const enableComponentPerformanceTrack = true;

export const enablePerformanceIssueReporting = false;

// Logs additional User Timing API marks for use with an experimental profiling tool.
export const enableSchedulingProfiler =
  __PROFILE__ && dynamicFeatureFlags.enableSchedulingProfiler;

export const disableLegacyContext = __EXPERIMENTAL__;

export const enableLegacyCache = true;

export const enableAsyncIterableChildren = false;

export const enableTaint = false;

// TODO: www currently relies on this feature. It's disabled in open source.
// Need to remove it.
export const disableCommentsAsDOMContainers = false;

export const enableCreateEventHandleAPI = true;

export const enableScopeAPI = true;

export const enableSuspenseCallback = true;

export const enableLegacyHidden = true;

export const disableTextareaChildren = __EXPERIMENTAL__;

export const enableFizzExternalRuntime = true;

export const passChildrenWhenCloningPersistedNodes = false;

export const disableClientCache = true;

export const enableReactTestRendererWarning = false;

export const disableLegacyMode = true;

export const enableEagerAlternateStateNodeCleanup = true;

export const enableGestureTransition = false;

export const enableSuspenseyImages = false;
export const enableFizzBlockingRender = true;
export const enableSrcObject = false;
export const enableHydrationChangeEvent = false;
export const enableDefaultTransitionIndicator = true;

export const ownerStackLimit = 1e4;

export const enableFragmentRefsInstanceHandles = true;

export const enableOptimisticKey = false;

// Flow magic to verify the exports of this file match the original version.
((((null))));
