import * as React from 'react'

import { cn } from '@/lib/utils'
import { Icons } from '@/lib/icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

// import OAuth from 'react-oauth'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const [isLoading, setIsLoading] = React.useState<boolean>(false)
	const [email, setEmail] = React.useState<string>(''); // Add this line to manage the email state
	const [password, setPassword] = React.useState<string>(''); // Add this line to manage the email state

  // const onSuccess = (response: any) => {
  //   console.log('Authentication succeeded:', response);
  //   // Handle successful login
  // };

  // const onError = (error: any) => {
  //   console.error('Authentication failed:', error);
  //   // Handle authentication error
  // };

	async function onSubmit(event: React.SyntheticEvent) {
		event.preventDefault()
		setIsLoading(true)
		var myHeaders = new Headers();
		myHeaders.append("accept", "application/json, text/plain, */*");
		myHeaders.append("content-type", "application/x-www-form-urlencoded");
		var urlencoded = new URLSearchParams();
			urlencoded.append("username", email);
			urlencoded.append("password", password);
			urlencoded.append("grant_type", "password");
			urlencoded.append("checkB2B", "true");
			urlencoded.append("clientId", "gaian");
			urlencoded.append("provider", "other");
			urlencoded.append("productId", "64e77ec2fc8337558d722547");

			var requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body:urlencoded
			};

			fetch("https://ig.aidtaas.com/iam-service/oauth/token", requestOptions)
			.then(response => response.text())
			.then(result =>{ 
				console.log(result)
				setIsLoading(false)

			})
			.catch(error => console.log('error', error));
				// setTimeout(() => {
				// 	setIsLoading(false)
				// }, 3000)

				// window.open(
				// 	'https://github.com/settings/applications/2429181',
				// 	'authWindow',
				// 	'height=600,width=400'
				// )
	}

	return (
		<div className={cn('grid gap-6', className)} {...props}>
			<form>
				<div className="grid gap-2">
					<div className="grid gap-1">
						<Label className="sr-only" htmlFor="email">
							Email
						</Label>
						<Input
							id="email"
							placeholder="name@example.com"
							type="email"
							autoCapitalize="none"
							autoComplete="email"
							autoCorrect="off"
							disabled={isLoading}
							value={email} // Bind the value to the email state
							onChange={(e) => setEmail(e.target.value)} // Handle input change
						/>
						<Label className="sr-only" htmlFor="password">
							Password
						</Label>
						<Input
							id="password"
							placeholder="*****"
							type="password"
							autoCapitalize="none"
							autoCorrect="off"
							disabled={isLoading}
							value={password} // Bind the value to the email state
							onChange={(e) => setPassword(e.target.value)} // Handle input change
						/>
					</div>
					<Button disabled={isLoading} onClick={onSubmit}>
						{isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
						Sign In with Email
					</Button>
				</div>
			</form>
			<div className="relative">
				<div className="absolute inset-0 flex items-center">
					<span className="w-full border-t dark:border-t-zinc-500" />
				</div>
				<div className="relative flex justify-center text-xs uppercase">
					<span className="bg-white dark:bg-black px-2 text-muted-foreground dark:text-zinc-500">
						Or continue with
					</span>
				</div>
			</div>
			<Button
				variant="outline"
				type="button"
				disabled={isLoading}
			>
				{isLoading ? (
					<Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
				) : (
					<Icons.gitHub className="mr-2 h-4 w-4" />
				)}{' '}
				Github
			</Button>
		</div>
	)
}
