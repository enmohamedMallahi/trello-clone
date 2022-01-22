export default function getListsNames(arr) {
  let lists = [];
  arr.foreach((item) => {
    if (lists.indexOf(item.list) !== -1) {
      lists.push(item.list);
    }
  });
  return lists;
}
