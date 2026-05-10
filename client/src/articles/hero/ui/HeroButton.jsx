
import MyButton from '../../../components/common/MyButton'

const HeroButton = () => {
  return (
    <div className='flex flex-col md:flex-row gap-3 '>
        <MyButton 
        text="herobtntext1"
        size='large'/>
        <MyButton 
        text="herobtntext2"
        variant='secondary'
        size='mediumxl'
        className=''/>
    </div>
  )
}

export default HeroButton