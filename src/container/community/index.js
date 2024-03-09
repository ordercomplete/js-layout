import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', `Ком'юніті`)

header.after(title)

const tabs = createTabs()
title.after(tabs)

// Вставка картинки
const image = createElement('img', 'community-image')
image.src = 'img/our-community.png'

function createTabs() {
  const tabsContainer = createElement('div', 'tabs')

  const knowledgeBaseTab = createElement(
    'button',
    'tab',
    'База знань',
  )

  const informationTab = createElement(
    'button',
    'tab',
    'Інформація',
  )

  tabsContainer.append(knowledgeBaseTab, informationTab)

  // Функція для видалення вмісту існуючих вкладок
  function clearTabsContent() {
    if (document.querySelector('.tab-content')) {
      document.querySelector('.tab-content').remove()
    }
  }

  // Функція для генерації випадкового тексту
  function generateRandomText() {
    const phrases = [
      "Наше ком'юніті у Телеграмі - місце, де зустрічаються однодумці.",
      "Телеграм-канал нашого ком'юніті - це ваше вікно в світ професійних обговорень.",
      'Підписуйтесь на наш Телеграм-канал, щоб бути в курсі останніх подій у сфері дизайну.',
      "У нашому ком'юніті в Телеграмі ви знайдете не тільки нових друзів, а й безліч корисної інформації.",
    ]
    return phrases[
      Math.floor(Math.random() * phrases.length)
    ]
  }

  function activateTab(tab) {
    const currentActiveTab =
      document.querySelector('.tab-active')
    if (currentActiveTab && currentActiveTab !== tab) {
      currentActiveTab.classList.remove('tab-active')
    }
    tab.classList.add('tab-active')
  }

  document.addEventListener(
    'DOMContentLoaded',
    function () {
      // Знаходимо вкладку, яку потрібно активувати при примусовому показі
      const forcedTab = document.querySelector('.tab')

      // Створюємо та спрацьовуємо подію кліку на знайдену вкладку
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
      forcedTab.dispatchEvent(clickEvent)
    },
  )
  activateTab(knowledgeBaseTab)

  knowledgeBaseTab.addEventListener('click', () => {
    clearTabsContent()

    activateTab(knowledgeBaseTab)

    const tabContent = createElement(
      'div',
      'tab-content',
      generateRandomText(),
    )

    tabsContainer.after(tabContent)
    tabContent.before(image)
  })

  informationTab.addEventListener('click', () => {
    clearTabsContent()
    activateTab(informationTab)

    const tabContent = createElement(
      'div',
      'tab-content',
      `Що таке база знань? База знань - база даних, що містить правила виведення та інформацію про людський досвід і знання в деякій предметній галузі. У системах, що самонавчаються, база знань також містить інформацію, що є результатом вирішення попередніх завдань.`,
    )

    tabsContainer.after(tabContent)
    tabContent.before(image)
  })

  return tabsContainer
}

// Створення кнопки, що веде до Telegram

const telegramButton = createElement(
  'button',
  'telegram-button',
  `Перейти до ком'юніті у Телеграм`,
)
telegramButton.addEventListener('click', () => {
  window.open('https://t.me/YourCommunityLink', '_blank')
})
page.append(telegramButton) // 'page' - ваш контейнер сторінки
