// eslint-disable-next-line import/no-unresolved
import confusedImage from "data-base64:/assets/emote/emote-confused.png"
// eslint-disable-next-line import/no-unresolved
import coolImage from "data-base64:/assets/emote/emote-cool.png"
// eslint-disable-next-line import/no-unresolved
import cryImage from "data-base64:/assets/emote/emote-cry.png"
// eslint-disable-next-line import/no-unresolved
import ggImage from "data-base64:/assets/emote/emote-gg.png"
// eslint-disable-next-line import/no-unresolved
import happyImage from "data-base64:/assets/emote/emote-happy.png"
// eslint-disable-next-line import/no-unresolved
import mindblownImage from "data-base64:/assets/emote/emote-mindblown.png"
// eslint-disable-next-line import/no-unresolved
import waveImage from "data-base64:/assets/emote/emote-wave.png"

import { useStorage } from "@plasmohq/storage/hook"

const IMAGE_SIZE = 24

export const EMOTES = [
  {
    name: "gg",
    initial: false,
    storageKey: "ggChecked",
    image: ggImage
  },
  {
    name: "happy",
    initial: false,
    storageKey: "happyChecked",
    image: happyImage
  },
  {
    name: "mindblown",
    initial: false,
    storageKey: "mindblownChecked",
    image: mindblownImage
  },
  {
    name: "wave",
    initial: false,
    storageKey: "waveChecked",
    image: waveImage
  },
  {
    name: "confused",
    initial: true,
    storageKey: "confusedChecked",
    image: confusedImage
  },
  {
    name: "cry",
    initial: false,
    storageKey: "cryChecked",
    image: cryImage
  },
  {
    name: "cool",
    initial: false,
    storageKey: "coolChecked",
    image: coolImage
  }
]

function HideEmote() {
  const [ggChecked, setGgChecked] = useStorage(
    EMOTES[0].storageKey,
    EMOTES[0].initial
  )
  const [happyChecked, setHappyChecked] = useStorage(
    EMOTES[1].storageKey,
    EMOTES[1].initial
  )
  const [mindblownChecked, setMindblownChecked] = useStorage(
    EMOTES[2].storageKey,
    EMOTES[2].initial
  )
  const [waveChecked, setWaveChecked] = useStorage(
    EMOTES[3].storageKey,
    EMOTES[3].initial
  )
  const [confusedChecked, setConfusedChecked] = useStorage(
    EMOTES[4].storageKey,
    EMOTES[4].initial
  )
  const [cryChecked, setCryChecked] = useStorage(
    EMOTES[5].storageKey,
    EMOTES[5].initial
  )
  const [coolChecked, setCoolChecked] = useStorage(
    EMOTES[6].storageKey,
    EMOTES[6].initial
  )

  const checked = [
    ggChecked,
    happyChecked,
    mindblownChecked,
    waveChecked,
    confusedChecked,
    cryChecked,
    coolChecked
  ]

  const setChecked = [
    setGgChecked,
    setHappyChecked,
    setMindblownChecked,
    setWaveChecked,
    setConfusedChecked,
    setCryChecked,
    setCoolChecked
  ]

  return (
    <div>
      {EMOTES.map((emote, index) => (
        <div key={emote.name}>
          <input
            type="checkbox"
            id={emote.name}
            checked={checked[index]}
            onChange={(e) => {
              const newChecked = [...checked]
              newChecked[index] = e.target.checked
              setChecked[index](e.target.checked)
            }}
          />{" "}
          <img
            src={emote.image}
            width={IMAGE_SIZE}
            alt={`emote ${emote.name}`}
          />{" "}
          <label htmlFor={emote.name}>{emote.name}</label>
        </div>
      ))}
    </div>
  )
}

export default HideEmote
