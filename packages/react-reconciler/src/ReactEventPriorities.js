/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


import {
  NoLane,
  SyncLane,
  InputContinuousLane,
  DefaultLane,
  IdleLane,
  getHighestPriorityLane,
  includesNonIdleWork,
} from './ReactFiberLane';


export const NoEventPriority = NoLane;
export const DiscreteEventPriority = SyncLane;
export const ContinuousEventPriority = InputContinuousLane;
export const DefaultEventPriority = DefaultLane;
export const IdleEventPriority = IdleLane;

export function higherEventPriority(
  a,
  b,
) {
  return a !== 0 && a < b ? a : b;
}

export function lowerEventPriority(
  a,
  b,
) {
  return a === 0 || a > b ? a : b;
}

export function isHigherEventPriority(
  a,
  b,
) {
  return a !== 0 && a < b;
}

export function eventPriorityToLane(updatePriority) {
  return updatePriority;
}

export function lanesToEventPriority(lanes) {
  const lane = getHighestPriorityLane(lanes);
  // 解释这段代码的逻辑如下：
  // 这里根据最高优先级的 lane，推断出它对应的事件优先级。
  // 先判断 lane 是否属于 DiscreteEventPriority（最高），不是更高优先级就返回 DiscreteEventPriority，
  // 否则再判断是否属于 ContinuousEventPriority（连续事件优先级），
  // 接着判断是否包含非 Idle 工作，如果是则默认 DefaultEventPriority，
  // 都不是则认为是 IdleEventPriority。
  if (!isHigherEventPriority(DiscreteEventPriority, lane)) {
    return DiscreteEventPriority;
  }
  if (!isHigherEventPriority(ContinuousEventPriority, lane)) {
    return ContinuousEventPriority;
  }
  if (includesNonIdleWork(lane)) {
    return DefaultEventPriority;
  }
  return IdleEventPriority;
}
