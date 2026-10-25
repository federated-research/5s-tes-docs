/* This page is here to rediect users to https://docs.federated-research.com/federated_research_patterns
The redirect can be preserved here without conflict as this site uses kebab-case routes
*/
import { permanentRedirect } from 'next/navigation';

export default async function WelcomeReportRedirect() {
  // Triggers an immediate server-side HTTP 308 redirect
  permanentRedirect('https://docs.federated-research.com/federated_research_patterns');

  return null;
}