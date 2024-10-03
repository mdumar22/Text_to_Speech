const textInputField = document.querySelector("#text-input")

  const form = document.querySelector("#form")

  const utterThis = new SpeechSynthesisUtterance()

  const synth = window.speechSynthesis


  form.onsubmit = (event) => {

    event.preventDefault()

    ourText = textInputField.value

    utterThis.text = ourText

    synth.speak(utterThis)

    textInputField.value = ""

  }
