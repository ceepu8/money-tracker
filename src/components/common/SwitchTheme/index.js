import { useTheme } from 'next-themes'

import { Button } from '@/components/ui'
import { THEME } from '@/constants'

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme()

  const onSetTheme = () => {
    const randomIndex = Math.floor(Math.random() * Object.values(THEME).length)
    setTheme(Object.values(THEME)[randomIndex])
  }

  return (
    <div className="flex justify-end">
      <Button onClick={onSetTheme}>{theme}</Button>
    </div>
  )
}

export default SwitchTheme
