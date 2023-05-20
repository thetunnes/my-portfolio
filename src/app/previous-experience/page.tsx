import { RenderPageHome } from '../../components/RenderPageHome'

const arrayCompanies = [
  {
    companyName: 'Coinsure',
    urlSite: 'https://zeca.coinsure.com.br',
  },
  {
    companyName: 'MaxCred',
    urlSite: 'https://app.maxcred.net',
  },
  {
    companyName: 'Tibia Project',
    urlSite: 'https://tibiaproject.com',
  },
]

export default function PreviousExperience() {
  return (
    <main className="flex w-full flex-col items-center justify-center px-6">
      {arrayCompanies.map((company) => (
        <RenderPageHome
          companyName={company.companyName}
          urlSite={company.urlSite}
          key={company.companyName}
        />
      ))}
    </main>
  )
}
