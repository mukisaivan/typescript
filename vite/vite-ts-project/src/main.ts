import './css/style.css'
import FullList from './models/FullList'
import ListItem from './models/ListItem'
import ListTemplate from './templates/ListTemplate'
const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const itemEntryForm = document.getElementById('itemEntryForm') as HTMLFormElement
  itemEntryForm.addEventListener('submit', (e: SubmitEvent) => {
    e.preventDefault()

    const input = document.getElementById('newItem') as HTMLInputElement
    const finalInput:string = input.value.trim()
    if (!finalInput.length) return

    //item id
    const itemid:number = fullList.list.length ? parseInt(fullList.list[fullList.list.length -1].id) + 1 : 1

    //final complete item
    const newItem = new ListItem(itemid.toString(), finalInput, false)
    fullList.addItem(newItem)

    template.render(fullList)
    
  })

  //clear items button
  const clearItems = document.getElementById('clearItemsButton') as HTMLButtonElement
  clearItems.addEventListener('click', () => {
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)

}

document.addEventListener('DOMContentLoaded', initApp)