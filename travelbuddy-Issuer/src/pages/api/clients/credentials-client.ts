import axios from 'axios'
import { projectId, apiGatewayUrl, tokenEndpoint,keyId, tokenId,passphrase,privateKey,publicKey, projectScopeToken } from 'src/utils/env'
import { AuthProvider } from '@affinidi-tdk/auth-provider'


type CredentialIssuanceStartOutput = {
    errors: string[]
    credentialOfferUri: string
    issuanceId: string
    expiresIn: number
    txCode: string
}
let projectScopedToken = ""
async function getProjectScopeToken() {

 
  const stats = {
      "apiGatewayUrl": apiGatewayUrl,
      "tokenEndpoint": tokenEndpoint,
      "keyId": keyId,
      "tokenId": tokenId,
      "passphrase": passphrase,
      "privateKey": privateKey,
      "publicKey": publicKey,
      "projectId": projectId
  }
  const authProvider = new AuthProvider(stats)

  
  await authProvider.fetchProjectScopedToken().then((result)=>{

    console.log('projectScopedToken', result);
    projectScopedToken = result
    });
    return projectScopedToken
}

export const credentialsClient = {
    
    startCredentialIssuance: async (input: {
       email: string
        name: string
        credtype: string
        credtitle: string
        webinardate: string
        desc: string
        webinartitle: string
        holderDid: string
    }): Promise<CredentialIssuanceStartOutput> => {

      await getProjectScopeToken();
      console.log('tdkProjectScopedToken', projectScopedToken)
        const apiData = {
            data: [
              {
                credentialTypeId: "TestTWebinarCredentialV1R0",
                credentialData: {
                  name: input.name,
                  email: input.email,
                  credtitle: input.credtitle,
                  credtype: input.credtype,
                  webinardate: input.webinardate,
                  desc: input.desc,
                  webinartitle: input.webinartitle,
                  creddate: new Date().toISOString(),
                },
              },
            ],
            claimMode: 'NORMAL',
            holderDid: input.holderDid,
          }
        
        const { data } = await axios<CredentialIssuanceStartOutput>(
            `${apiGatewayUrl}/cis/v1/${projectId}/issuance/start`,
            {
                method: 'POST',
                headers: {
                    'Authorization': `${projectScopedToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                },
                data: apiData,
            }
        )

        return data
    },
}
