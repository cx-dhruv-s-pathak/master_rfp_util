import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})


//to allow hosted URLs:

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true, // allows external access
//     hmr: {
//       host: '4582-103-149-126-38.ngrok-free.app',
//       protocol: 'wss', // use 'ws' if you're not using SSL
//     },
//   },
// })
