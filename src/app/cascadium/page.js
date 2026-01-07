'use client';

import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Cascadium() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: '/cascadium/Build/Cascadium.loader.js',
    dataUrl: '/cascadium/Build/Cascadium.data',
    frameworkUrl: '/cascadium/Build/Cascadium.framework.js',
    codeUrl: '/cascadium/Build/Cascadium.wasm',
  });

  return (
    <div className="min-h-screen bg-theme-primary text-theme-secondary px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-theme-primary">Cascadium</h1>
        <p className="text-xl mb-8 text-theme-muted">Match • Cascade • Conquer</p>
        
        <div className="mb-12 flex justify-center">
          {!isLoaded && (
            <p className="text-theme-muted">Loading... {Math.round(loadingProgression * 100)}%</p>
          )}
          <Unity 
            unityProvider={unityProvider} 
            style={{ width: 540, height: 960, display: isLoaded ? 'block' : 'none' }}
          />
        </div>
        
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-theme-primary">About</h2>
          <p className="mb-4 text-theme-muted leading-relaxed">
            Match-3 puzzle game built in 48 hours.
          </p>
        </div>
      </div>
    </div>
  );
}