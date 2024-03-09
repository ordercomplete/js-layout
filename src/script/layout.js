export const createElement = (tag, className, text) => {
  const elem = document.createElement(tag)

  if (className) {
    elem.className = className
  }

  if (text) {
    elem.innerHTML = text
  }

  return elem
}

const HEADER_BUTTON_LIST = [
  {
    width: 24,
    height: 24,
    src: '/svg/header_back.svg',
  },
  {
    width: 24,
    height: 24,
    src: '/img/header_avatar.png',
  },
]

export const createHeader = () => {
  const header = createElement('header', 'header')

  HEADER_BUTTON_LIST.forEach((params) => {
    const button = createElement('button', 'button')

    const img = createElement('img')

    console.log(Object.entries(params))

    Object.entries(params).forEach(([key, value]) => {
      img[key] = value
    })

    button.insertAdjacentElement('beforeend', img)

    header.insertAdjacentElement('beforeend', button)
  })

  return header
}

// const HEADER_BUTTON_LIST = [
//   {
//     width: 24,
//     height: 24,
//     src: '/svg/header_back.svg',
//     href: '/internal-link-1',
//   },
//   {
//     width: 24,
//     height: 24,
//     src: '/img/header_avatar.png',
//     href: '/internal-link-2',
//   },
// ]

// export const createHeader = () => {
//   const header = createElement('header', 'header')

//   HEADER_BUTTON_LIST.forEach((params) => {
//     const button = createElement('button', 'button')
//     const link = createElement('a')
//     link.setAttribute('href', params.href)

//     const img = createElement('img')

//     Object.entries(params).forEach(([key, value]) => {
//       if (key !== 'href') {
//         img[key] = value
//       }
//     })

//     link.insertAdjacentElement('beforeend', img)
//     button.insertAdjacentElement('beforeend', link)

//     header.insertAdjacentElement('beforeend', button)
//   })

//   return header
// }
