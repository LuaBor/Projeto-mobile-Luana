import { Image, StyleSheet, Platform, Button } from 'react-native';

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
          source={require('@/assets/images/bank-logo-icon-illustration-vector.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Bem vindo,usuário!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
      <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="PIX"
/>
        <ThemedText type="subtitle">
       </ThemedText>
        <ThemedText>
           <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold">
           </ThemedText>{' '} Última Transferência via pix feita no dia 03/04/2025.
        </ThemedText> 
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText> 
        <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="CARTÕES"
/>
        <ThemedText> Saldo em crédito: 1.348,00.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle"></ThemedText>
        <Button
  onPress={() => {
    console.log('You tapped the button!');
  }}
  title="DEPÓSITO"
/>
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText>
          <ThemedText type="defaultSemiBold"></ThemedText> Último depósito feito dia 04/11/2025.
          <ThemedText type="defaultSemiBold"></ThemedText> 
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
    height: '100%',
    width:'100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
