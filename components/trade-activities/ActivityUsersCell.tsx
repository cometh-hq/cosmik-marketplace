"use client"

import React, { useMemo } from "react"
import { useUsernames } from "@/services/cosmik/userService"
import { TokenType, TradeDirection, TradeStatus } from "@cometh/marketplace-sdk"
import { ArrowRightIcon } from "lucide-react"
import { useAccount } from "wagmi"

import { CopyButton } from "../ui/CopyButton"
import { UserButton } from "../ui/user/UserButton"
import {
  getActivityNftOwner,
  getActivityNftReceiver,
  isOrderActivity,
} from "./activityHelper"
import { AssetActivity } from "./AssetActivityTypes"

export const ActivityUsersCell = ({
  activity,
}: {
  activity: AssetActivity
}) => {
  const account = useAccount()
  const viewerAddress = account.address

  const nftOwner = useMemo(
    () => getActivityNftOwner(activity, viewerAddress),
    [activity, viewerAddress]
  )
  const nftReceiver = useMemo(
    () => getActivityNftReceiver(activity, viewerAddress),
    [activity, viewerAddress]
  )

  const { usernames, isFetchingUsernames } = useUsernames([
    nftOwner.address,
    nftReceiver.address,
  ])

  const shouldOnlyShowOneUser = useMemo(() => {
    return (
      isOrderActivity(activity) &&
      (activity.order.orderStatus !== TradeStatus.FILLED ||
        activity.order.tokenType === TokenType.ERC1155)
    )
  }, [activity])

  const shouldHideOwner = useMemo(() => {
    return (
      shouldOnlyShowOneUser &&
      isOrderActivity(activity) &&
      activity.order.direction === TradeDirection.BUY
    )
  }, [activity, shouldOnlyShowOneUser])

  const shouldHideReceiver = useMemo(() => {
    return (
      shouldOnlyShowOneUser &&
      isOrderActivity(activity) &&
      activity.order.direction === TradeDirection.SELL
    )
  }, [activity, shouldOnlyShowOneUser])

  return (
    <div className="flex items-center gap-2">
      {!shouldHideOwner && (
        <>
          <UserButton
            user={{
              username: isFetchingUsernames
                ? "..."
                : usernames[nftOwner.address],
              address: nftOwner.address,
            }}
          />
          <CopyButton textToCopy={nftOwner.address} />
        </>
      )}
      {!shouldOnlyShowOneUser && <ArrowRightIcon size={18} />}
      {!shouldHideReceiver && (
        <>
          <UserButton
            user={{
              username: isFetchingUsernames
                ? "..."
                : usernames[nftReceiver.address],
              address: nftReceiver.address,
            }}
          />
          <CopyButton textToCopy={nftReceiver.address} />
        </>
      )}
    </div>
  )
}