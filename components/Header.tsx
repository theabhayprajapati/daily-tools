import TextFieild from './TextFieild';

const HeaderCam = () => {
  return (
    <div className='h-12 border-x-2 flex items-center justify-items-center p-3'>
      <TextFieild label='Daily Tools' />
      {/* github twitter */}
      <div className='flex items-center justify-items-center mx-8'>
        <a href='
            https://github.com/theabhayprajapati/daily-tools'
          target='_blank'
          title='Github repo'
          rel='noopener noreferrer'
          className='text-green-500 hover:text-green-700 font-semibold'>
          Github
        </a>
        <a href='
            https://twitter.com/theabhayprajapati'
          title='twitter '
          target='_blank'
          rel='noopener noreferrer'
          className='ml-4 text-blue-500 hover:text-blue-700 font-semibold'>
          @abhayprajapati_
        </a>
      </div>

    </div>
  )
}

export default HeaderCam