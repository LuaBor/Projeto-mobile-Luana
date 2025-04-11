import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo,usuário!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Transferências
       </ThemedText>
  
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
           </ThemedText>{' '} Última Transferência feita no dia 03/04/2025.
        </ThemedText> 
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Pagamento por pix</ThemedText> 
        <ThemedText>
          Suas Transferências recentes: +55 ****-**** e +55 ****-****.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Sua chave pix:</ThemedText>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> +55 ****-****.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
