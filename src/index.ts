import { useState, useEffect } from 'react'
import {
  watchStreamAudioLevel,
  WatchStreamAudioLevelOption,
} from 'stream-audio-level'

export const useStreamAudioLevel = (
  stream: MediaStream | undefined,
  opt?: WatchStreamAudioLevelOption
) => {
  const [v, setV] = useState(0)
  useEffect(() => {
    let close: Function | undefined
    if (stream && stream.getAudioTracks().length > 0) {
      close = watchStreamAudioLevel(stream, setV, opt)
    }
    return () => {close && close()}
  }, [stream])

  return v
}
