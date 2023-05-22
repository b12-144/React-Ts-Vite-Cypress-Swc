import { Player } from '@lottiefiles/react-lottie-player'
import lottieSample from '../assets/lottie_sample.json'

const style = {
  height: 250
}

export default function LottiePage() {
  return (
    <>
      <Player autoplay loop controls={false} src={lottieSample} style={{ height: '300px', width: '300px' }}>
      </Player>
      More info at https://github.com/LottieFiles/lottie-react
    </>
  )
}
