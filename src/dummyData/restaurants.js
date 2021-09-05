const dummyData = []

for (let i = 0; i < 10; i++) {
  dummyData.push({
    id: i,
    title: '石二鍋',
    image: `https://picsum.photos/500/400?random=${i}`,
    detail: '經典料理都在這裡',
    follower: '1471',
    isFollowed: (i % 3 === 0)
  })
}
export default dummyData
