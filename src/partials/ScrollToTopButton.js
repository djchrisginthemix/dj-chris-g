import { useState, useEffect } from 'react'
import { WiLightning } from 'react-icons/wi'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-5 right-5 transition duration-500 ease-in-out bg-yellow-mid hover:bg-transparent text-white hover:text-white p-3 rounded-full shadow-md hover:shadow-none"
          onClick={handleScrollToTop}
        >
          <WiLightning className="text-6xl" />
        </button>
      )}
    </>
  )
}

export default ScrollToTopButton
