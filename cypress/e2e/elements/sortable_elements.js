class sortable {
    title = () => { return 'h5' }
    sortableOption = () => { return 'div.left-pannel a[href="/sortable"]' }
    sortableItems = () => { return 'div#sortable li' }
    dragItem = (index) => { return `div#sortable li=nth-child(${index})` }
}
export default sortable;