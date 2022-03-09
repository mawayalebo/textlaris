import { getProviders, signIn as logIn} from 'next-auth/react';
import Image from 'next/image';

function signIn({providers}:any) {
  return (
    <div className='relative flex justify-center h-screen'>
       <Image src="/images/image2.png" alt="image" objectFit='cover' layout='fill' className='absolute '/>
   
      <div className='max-w-4xl h-full p-10 z-10'>
          <div className='shadow-sm flex flex-col rounded-3xl bg-white ring ring-red-400 p-10'>
            <div>
              <h2 className='text-2xl font-bold uppercase mb-4'>Connect  With your:</h2>
            </div>
              {
                Object.values(providers).map((provider:any)=> (
                  <button key={provider.name} className=' h-12 px-4 py-2 text-center text-white bg-blue-400 rounded-full'
                    onClick={() => logIn(provider.id, {callbackUrl: '/'})}
                  >
                    {provider.name} Account
                  </button>
                ))
              }
       </div>
      </div>
      </div>
  )
}
//get providers from next-auth/client
export async function getServerSideProps() {
  const providers =await getProviders();
      return{
          props: {
            providers
          }
      }
  }
export default signIn
