import { providers } from 'ethers'
import { useMemo } from 'react'
import { Chain, Client, Transport } from 'viem'
import { Config, useClient,  useConnectorClient } from 'wagmi'

export function clientToProvider(client) {
  const { chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts?.ensRegistry?.address,
  }
  if (transport.type === 'fallback')
    return new providers.FallbackProvider(
      (transport.transports).map(
        ({ value }) => new providers.JsonRpcProvider(value.url, network),
      ),
    )
  return new providers.JsonRpcProvider(transport.url, network)
}

/** Hook to convert a viem Client to an ethers.js Provider. */
export function useEthersProvider({
  chainId,
} = {}) {
  const client = useClient<Config>({ chainId })
  return useMemo(() => (client ? clientToProvider(client) : undefined), [client])
}

export function clientToSigner(client) {
  const { account, chain, transport } = client
  const network = {
    chainId: chain.id,
    name: chain.name,
    ensAddress: chain.contracts.ensRegistry.address,
  }
  const provider = new providers.Web3Provider(transport, network)
  const signer = provider.getSigner(account.address)
  return signer
}

/** Hook to convert a Viem Client to an ethers.js Signer. */
export function getEthersSigner({ chainId }= {}) {
  const { data: client } = useConnectorClient({ chainId })
  return useMemo(() => (client ? clientToSigner(client) : undefined), [client])
}

// // Importing required modules
// import { providers } from 'ethers';
// import { useMemo } from 'react';
// import { Config, useConnectorClient } from 'wagmi';

// function clientToSigner(client) {
//   const { account, chain, transport } = client;
//   const network = {
//     chainId: chain.id,
//     name: chain.name,
//     ensAddress: chain.contracts?.ensRegistry?.address,
//   };
//   const provider = new providers.Web3Provider(transport, network);
//   const signer = provider.getSigner(account.address);
//   return signer;
// }

// // Hook to convert a Viem Client to an ethers.js Signer.
// function useEthersSigner({ chainId } = {}) {
//   const { data: client } = useConnectorClient<Config>({ chainId });
//   return useMemo(() => (client? clientToSigner(client) : undefined), [client]);
// }

// export { clientToSigner, useEthersSigner };


