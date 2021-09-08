const dummyData = []

for (let i = 0; i < 12; i++) {
  if (i % 2 === 0) {
    dummyData.push({
      id: i,
      title: '石二鍋',
      image: `https://picsum.photos/500/400?random=${i}`,
      detail: '經典料理都在這裡',
      follower: '1471',
      isFollowed: (i % 3 === 0)
    })
  } else if (i % 3 === 0) {
    dummyData.push({
      id: i,
      title: '小蒙牛',
      image: `https://picsum.photos/500/400?random=${i}`,
      detail: '挾大漠風味養生湯頭加上頂級牛肉，征服老饕的味蕾，超讚！',
      follower: '500',
      isFollowed: (i % 3 === 0)
    })
  } else {
    dummyData.push({
      id: i,
      title: '五十嵐',
      image: `https://picsum.photos/500/400?random=${i}`,
      detail: '臺灣一家手搖飲品連鎖店，必喝冰淇淋紅茶加珍珠!',
      follower: '891',
      isFollowed: (i % 3 === 0)
    })
  }
}
export default dummyData
