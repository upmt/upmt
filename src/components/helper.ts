import { useQuasar } from 'quasar'

function getValue (value: string,
  callback: (newValue: string) => any,
  title = 'Enter the new name') {
    const $q = useQuasar()
    $q.dialog({
      title,
      prompt: {
        model: value,
        type: 'text'
      },
      cancel: true,
      persistent: true
    }).onOk(name => {
      callback(name)
    })
}

export {
  getValue
}
