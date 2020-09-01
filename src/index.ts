import { useState, useEffect } from 'react'
import {
  watchStreamAudioLevel,
  WatchStreamAudioLevelOption,
} from 'stream-audio-level'

export const useStreamAudioLevel = (
  stream: MediaStream,
  opt?: WatchStreamAudioLevelOption
) => {
  const [v, setV] = useState(0)
  useEffect(() => {
    if (stream) {
      return watchStreamAudioLevel(stream, setV, opt)
    }
    return () => {}
  }, [stream])

  return v
}
