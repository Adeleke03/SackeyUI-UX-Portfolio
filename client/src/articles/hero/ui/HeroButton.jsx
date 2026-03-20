
import MyButton from '../../../components/common/MyButton'

const HeroButton = () => {
  return (
    <div className=''>
        <MyButton 
        text="herobtntext1"
        size='large'/>
        <MyButton 
        text="herobtntext2"
        variant='secondary'
        size='mediumxl'
        className='ml-5'/>
    </div>
  )
}

export default HeroButton