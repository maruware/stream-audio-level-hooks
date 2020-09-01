# stream-audio-level-hooks

React hooks for MediaStream audio level

## Installation

```
yarn add stream-audio-level-hooks
```

## Usage

```ts
import { useStreamAudioLevel } from 'stream-audio-level-hooks'
const level = useStreamAudioLevel(stream, {
  minHz: 100, maxHz: 1000
})
```
