import { useRouter } from 'next/router';
import React, { use } from 'react'
import { logoutAccount } from '@/lib/actions/user.actions'

const Footer = ({user, type = 'desktop'}: FooterProps) => {
    const router = useRouter();

    const handleLogOut = async () => {
        const loggedOut = await logoutAccount();

        if(loggedOut) router.push('/sign-in')
  return (
    <footer className='footer'>
        <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
            <p className='text-xl font-bold text-gray-700'>
                {user?.firstName[0]}
            </p>
        </div>

        <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
            <h1 className='text-14 truncate text-gray-700 font-semibold'>
            {user?.firstName}
            </h1>
        </div>
    </footer>
  )
}

export default Footer

function logoutAccount() {
        throw new Error('Function not implemented.');
    }
