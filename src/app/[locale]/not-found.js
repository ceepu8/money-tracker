import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations()

  return (
    <section>
      <div>
        <button type="button">back to home</button>
      </div>
      <div>{t('common.not_found')}</div>
    </section>
  )
}
