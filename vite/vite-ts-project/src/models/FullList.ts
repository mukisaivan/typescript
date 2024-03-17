import ListItem from "./ListItem";

interface List {
  list: ListItem[],
  load(): void,
  save(): void,
  addItem(itemObj: ListItem): void
  removeItem(id: string): void
  clearList(): void,
}

export default class FullList implements List {


  static instance: FullList = new FullList()



  constructor(private _list: ListItem[] = []) { }

  load(): void {
    const storedList: string | null = localStorage.getItem('myList')
    if (typeof storedList !== 'string') return
    const parsedList: { _id: string, _item: string, checked: boolean }[] = JSON.parse(storedList)
    parsedList.forEach(itemObj => {
      const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj.checked)
      FullList.instance.addItem(newListItem)
      // this.addItem(newListItem)
    })

  }

  get list(): ListItem[] {
    return this._list
  };


  save(): void {
    localStorage.setItem('myList', JSON.stringify(this._list))
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj)
    this.save()
  }

  removeItem(id: string): void {
    let newList = this._list.filter(item => item.id !== id)
    this._list = newList
    this.save()

  }

  clearList(): void {
    this._list = []
    this.save()
  }
}