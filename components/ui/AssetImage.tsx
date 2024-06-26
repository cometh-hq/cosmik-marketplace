import { useCallback, useMemo, useRef, useState } from "react"
import Image, { ImageProps } from "next/image"
import { z } from "zod"

export const getImageURL = (src?: string | null) => {
  if (!src) return null
  return src.startsWith("ipfs")
    ? `https://ipfs.io/ipfs/${src.replace("ipfs://", "")}`
    : src
}

export type AssetImageProps = {
  src?: string | null
  fallback?: string | null
  imageData?: string | null
  name?: string
} & Omit<ImageProps, "src" | "alt" | "onError" | "quality">

export function AssetImage({
  src,
  name,
  imageData,
  fallback,
  ...props
}: AssetImageProps) {
  const [_src, setSrc] = useState(getImageURL(src ?? fallback ?? null))

  const tried = useRef(false)
  const onError = useCallback(() => {
    if (tried.current || _src === fallback) return
    tried.current = true
    setSrc(getImageURL(fallback) ?? null)
  }, [_src, fallback])

  const isSrcValid = useMemo(() => {
    const zodUrl = z.string().url()
    const urlParseRes = zodUrl.safeParse(_src)
    return urlParseRes.success
  }, [_src])

  if (imageData && imageData.startsWith("<svg")) {
    return (
      <div
        className="bg-background z-10 size-full"
        dangerouslySetInnerHTML={{ __html: imageData }}
      />
    )
  }

  if (_src === null || !isSrcValid) {
    return <div className="bg-background z-10 size-full" />
  }

  return (
    <Image
      src={_src}
      alt={name ?? "Asset image"}
      onError={onError}
      quality={80}
      onLoad={props.onLoad}
      {...props}
    />
  )
}
