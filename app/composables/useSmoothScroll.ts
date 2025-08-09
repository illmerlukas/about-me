export const useSmoothScroll = () => {
  const scrollToElement = (targetSelector: string) => {
    const element = document.querySelector(targetSelector)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      return true
    }
    return false
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleAnchorClick = (event: Event) => {
    const target = event.target as HTMLAnchorElement
    if (target.hash) {
      const scrolled = scrollToElement(target.hash)
      if (scrolled) {
        event.preventDefault()
      }
    }
  }

  return {
    scrollToElement,
    scrollToTop,
    handleAnchorClick,
  }
}
