interface CompanionIdPageProps {
  params: {
    companionId: string
  }
}

export default async function CompanionIdPage({params}: CompanionIdPageProps) {
  return (<div>{params.companionId}</div>)
}