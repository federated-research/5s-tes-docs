/* This page is here to preserve the existing link https://federated-analytics.ac.uk/five_safes_tes
    as used in the Welcome Report to link to the Five Safes TES Weave overview,
    by redirecting it to the new location.

    The redirect can be preserved here without conflict as this site uses kebab-case routes
*/
import { permanentRedirect } from 'next/navigation';

export default async function WelcomeReportRedirect() {
  // Triggers an immediate server-side HTTP 308 redirect
  permanentRedirect('https://docs.federated-research.com/five_safes_tes'); 
  
  return null; 
}