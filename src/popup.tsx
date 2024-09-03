import HideEmote from "~components/HideEmote"

function IndexPopup() {
  return (
    <div
      style={{
        padding: 8,
        minWidth: 140
      }}>
      <p>{chrome.i18n.getMessage("popup_title")}</p>
      <HideEmote />
      <p
        style={{
          paddingTop: 8
        }}>
        <a href="options.html" target="_blank">
          {chrome.i18n.getMessage("popup_options")}
        </a>
      </p>
    </div>
  )
}

export default IndexPopup
