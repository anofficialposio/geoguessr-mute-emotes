// eslint-disable-next-line import/no-unresolved
import iconImage from "data-base64:/assets/icon.png"
// eslint-disable-next-line import/no-unresolved
import tipsJaImage from "data-base64:/assets/tips_ja.png"
// eslint-disable-next-line import/no-unresolved
import tipsImage from "data-base64:/assets/tips.png"
import { useMemo } from "react"

import HideEmote from "~components/HideEmote"

function OptionsIndex() {
  const version = useMemo(() => {
    const manifest = chrome.runtime.getManifest()
    return manifest.version
  }, [])

  const tips = useMemo(() => {
    const lang = chrome.i18n.getUILanguage()
    console.log(`lang: ${lang}`)
    return lang?.startsWith("ja") ? tipsJaImage : tipsImage
  }, [])

  return (
    <div style={{ padding: "24px" }}>
      <img src={iconImage} width="70" alt="app icon" />
      <h1>
        {chrome.i18n.getMessage("name")} v{version}
      </h1>
      <div style={{ marginTop: "28px" }}>
        <h2>{chrome.i18n.getMessage("options_mute_emotes_title")}</h2>
        <p style={{ marginBottom: 24 }}>
          {chrome.i18n.getMessage("options_mute_emotes_description")}{" "}
        </p>
        <HideEmote />
      </div>

      <h3 style={{ marginTop: "32px" }}>Tips:</h3>
      <p>{chrome.i18n.getMessage("options_mute_emotes_tips_description")}</p>
      <img src={tips} width={800} alt="tips" />

      <hr
        style={{
          marginTop: "48px",
          marginBottom: "18px"
        }}
      />

      <footer>
        Made by{" "}
        <a href="https://posio.pages.dev" target="_blank" rel="noreferrer">
          Posio
        </a>
      </footer>
    </div>
  )
}

export default OptionsIndex
