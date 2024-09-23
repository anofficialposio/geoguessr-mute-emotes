import type { PlasmoCSConfig } from "plasmo"

import { Storage } from "@plasmohq/storage"

import { EMOTES } from "~components/HideEmote"

console.log("Running content script: gg.ts")

const storage = new Storage()

export const config: PlasmoCSConfig = {
  matches: [
    "https://www.geoguessr.com/*"

    // memo
    // https://www.geoguessr.com/duels/* だと、直接そのページを開かないかぎり、
    // リロードしないと読み込まれない。Nextjsの画面遷移だと発火できないのかな。
    // Plasmo未使用時にどうなのかは、 https://www.geoguessr.com/* でしか動作確認していなかったので、不明
    //
    // 遷移時は Window: load が呼ばれていない
  ]
}

const hideEmotes = new Set()

async function loadInitialValue() {
  for (const emote of EMOTES) {
    const v = await storage.get(emote.storageKey)
    let value
    if (v === undefined) {
      value = emote.initial
    } else {
      value = Boolean(v)
    }
    // console.log(`${emote.storageKey}: ${v}, ${value}`)
    if (value) {
      hideEmotes.add(emote.name)
    }
  }

  // console.log("Initial value loaded")
  // console.log(hideEmotes)
}

loadInitialValue().then()

storage.watch({
  ggChecked: (c) => {
    console.log(`gg: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("gg")
    } else {
      hideEmotes.delete("gg")
    }
  },
  happyChecked: (c) => {
    console.log(`happy: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("happy")
    } else {
      hideEmotes.delete("happy")
    }
  },
  mindblownChecked: (c) => {
    console.log(`mindblown: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("mindblown")
    } else {
      hideEmotes.delete("mindblown")
    }
  },
  waveChecked: (c) => {
    console.log(`wave: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("wave")
    } else {
      hideEmotes.delete("wave")
    }
  },
  confusedChecked: (c) => {
    console.log(`confused: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("confused")
    } else {
      hideEmotes.delete("confused")
    }
  },
  cryChecked: (c) => {
    console.log(`cry: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("cry")
    } else {
      hideEmotes.delete("cry")
    }
  },
  coolChecked: (c) => {
    console.log(`cool: ${c.newValue}`)
    if (c.newValue) {
      hideEmotes.add("cool")
    } else {
      hideEmotes.delete("cool")
    }
  }
})

const hideEmote = () => {
  const chatLines = document.querySelectorAll(
    'div[class^="chat-message_sharedRoot__"]'
  )

  for (const line of chatLines) {
    const image = line.querySelector(`img[src*="emote-"]`)
    if (!image) {
      continue
    }

    const src = image.getAttribute("src")
    for (const emote of hideEmotes) {
      if (src.includes(`emote-${emote}`)) {
        // hide emote only
        // image.style.display = 'none'

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        line.style.display = "none"
        console.log("Hide emote:", emote)
        break
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const observer = new MutationObserver((mutationsList, observer) => {
  const url = window.location.href ?? ""
  // console.log(url)

  // https://www.geoguessr.com/duels/xxx だけでなく、 https://www.geoguessr.com/ja/duels/xxx などがある
  if (!url.includes("/duels/") && !url.includes("/team-duels/")) {
    // console.log("not for me")
    return
  }

  hideEmote()
})

const target = document.querySelector("#__next")
if (target) {
  observer.observe(target, { subtree: true, childList: true })
} else {
  console.log("Target not found")
}

// window.addEventListener("load", () => {
//   const url = window.location.href
//   console.log(`Page loaded ${url}`)
// })

// document.addEventListener("readystatechange", () => {
//   const url = window.location.href
//   console.log(`readystatechange ${url} ${document.readyState}`)
// })

// document.addEventListener("DOMContentLoaded", () => {
//   const url = window.location.href
//   console.log(`DOMContentLoaded ${url}`)
// })
