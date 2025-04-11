import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Menu</ThemedText>
      </ThemedView>
      <ThemedText>Aqui estão mais algumas opções para você:</ThemedText>
      <Collapsible title="Saldo em conta corrente">
        <ThemedText>
          R$ 120,43 dispobível.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Dinheiro guardado">
        <ThemedText>
          R$ 2.572 de dinheiro guardado.{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
      </Collapsible>
      <Collapsible title="Rendimento da conta">
        <ThemedText>
          +R$ 2,72 de rendimento mensal. <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText type="defaultSemiBold"></ThemedText>
        </ThemedText>
        <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
        <ExternalLink href="https://reactnative.dev/docs/images">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Empréstimos">
        <ThemedText>
          Até R$ 5.952 disponível para seus empréstimos. <ThemedText type="defaultSemiBold"></ThemedText>{' '}
          <ThemedText style={{ fontFamily: 'SpaceMono' }}>
          </ThemedText>
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Seguro de vida">
        <ThemedText>
            {' '}
          <ThemedText>Seguro ativo: R$127,32.</ThemedText>
         </ThemedText>
        <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
          <ThemedText type="link"></ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Ajuda">
        <ThemedText>
          {' '}
          <ThemedText type="defaultSemiBold"></ThemedText> Se precisar de ajuda você pode entrar em contato com nossa agência atráves do seguinte número +55 ****-****.
          <ThemedText type="defaultSemiBold"></ThemedText>{' '}
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
               <ThemedText type="defaultSemiBold"></ThemedText>{' '}
            </ThemedText>
          ),
        })}
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
