import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Platform } from 'react-native'
import TabBarIcon from './components/TabBarIcon'

import LoginScreen from './pages/LoginPage'
import AuthenticationScreen from './pages/AuthenticationPage'
import NameScreen from './pages/NamePage'

import HomeScreen from './pages/HomePage'
import FavoriteScreen from './pages/FavoritePage'
import CartScreen from './pages/CartProductsPage'
import ProfileScreen from './pages/ProfilePage'

import ShippingScreen from './pages/ShippingPage'
import PaymentScreen from './pages/PaymentPage'
import PaymentSucsScreen from './pages/PaymentSuccessPage'
import ProductScreen from './pages/ProductPage'
import ProductSellerScreen from './pages/ProductSellerPage'
import AddProductScreen from './pages/AddProductsPage'
import AddPhotoScreen from './pages/AddPhotoProductsPage'
import NewProductScreen from './pages/NewProductPage'
import ProductSucScreen from './pages/SuccessProductPage'
import DocumentScreen from './pages/DocumentPage'
import ConfirmPhone from './pages/ConfirmPhone'

const AppStack = createStackNavigator()
const AppTab = createBottomTabNavigator()

const TabNavigator = () => {
	return (
		<NavigationContainer independent={true}>
			<AppTab.Navigator>
				<AppTab.Screen
					name="Home"
					component={MenuHome}
					options={{
						tabBarLabel: 'Home',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-home` : 'md-home'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Favoritos"
					component={FavoriteScreen}
					options={{
						tabBarLabel: 'Favoritos',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-heart` : 'md-heart'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Carrinho"
					component={Cart}
					options={{
						tabBarLabel: 'Carrinho',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-cart` : 'md-cart'} />
						),
					}}
				/>
				<AppTab.Screen
					name="Perfil"
					component={Perfil}
					options={{
						tabBarLabel: 'Perfil',
						tabBarIcon: ({ color, size }) => (
							<TabBarIcon focused={true} name={Platform.OS === 'ios' ? `ios-contact` : 'md-contact'} />
						),
					}}
				/>
			</AppTab.Navigator>
		</NavigationContainer>
	)
}

const AuthNavigator = () => {
	return (
		<NavigationContainer independent={true}>
			<AppStack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: '#FFA939',
					},
				}}
			>
				<AppStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Cadastro" component={AuthenticationScreen} />
				<AppStack.Screen name="Nome" component={NameScreen} />
				<AppStack.Screen name="Telefone" component={ConfirmPhone} />
				<AppStack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

const MenuHome = () => {
	return (
		<NavigationContainer independent={true}>
			<AppStack.Navigator>
				<AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Produto" component={ProductScreen} options={{ headerShown: true }} />
				<AppStack.Screen name="Carrinho" component={CartScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Entrega" component={ShippingScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Pagamento" component={PaymentScreen} options={{ headerShown: false }} />
				<AppStack.Screen
					name="PagamentoSucesso"
					component={PaymentSucsScreen}
					options={{ headerShown: false }}
				/>
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

const Cart = () => {
	return (
		<NavigationContainer independent={true}>
			<AppStack.Navigator>
				<AppStack.Screen name="Carrinho" component={CartScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Entrega" component={ShippingScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Pagamento" component={PaymentScreen} options={{ headerShown: false }} />
				<AppStack.Screen
					name="PagamentoSucesso"
					component={PaymentSucsScreen}
					options={{ headerShown: false }}
				/>
				<AppStack.Screen name="Produto" component={ProductScreen} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

const Perfil = () => {
	return (
		<NavigationContainer independent={true}>
			<AppStack.Navigator>
				<AppStack.Screen name="Perfil" component={ProfileScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Produto" component={ProductScreen} options={{ headerShown: true }} />
				<AppStack.Screen name="Carrinho" component={CartScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Entrega" component={ShippingScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="Pagamento" component={PaymentScreen} options={{ headerShown: false }} />
				<AppStack.Screen
					name="PagamentoSucesso"
					component={PaymentSucsScreen}
					options={{ headerShown: false }}
				/>
				<AppStack.Screen name="DocumentoVendedor" component={DocumentScreen} options={{ headerShown: false }} />
				<AppStack.Screen
					name="VenderProduto"
					component={ProductSellerScreen}
					options={{ headerShown: false }}
				/>
				<AppStack.Screen name="AddProduto" component={AddProductScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="AddPhoto" component={AddPhotoScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="NovoProduto" component={NewProductScreen} options={{ headerShown: false }} />
				<AppStack.Screen name="SucessoProduto" component={ProductSucScreen} options={{ headerShown: false }} />
			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default createAppContainer(
	createSwitchNavigator(
		{
			Auth: AuthNavigator,
			Tab: TabNavigator,
		},
		{
			initialRouteName: 'Auth',
		}
	)
)
