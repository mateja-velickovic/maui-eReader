package mono.android.app;

public class ApplicationRegistration {

	public static void registerApplications ()
	{
				// Application and Instrumentation ACWs must be registered first.
		mono.android.Runtime.register ("p_app_matvelickovic_readme.MainApplication, p_app-matvelickovic-readme, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", crc64953b9955950eb44a.MainApplication.class, crc64953b9955950eb44a.MainApplication.__md_methods);
		mono.android.Runtime.register ("Microsoft.Maui.MauiApplication, Microsoft.Maui, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null", crc6488302ad6e9e4df1a.MauiApplication.class, crc6488302ad6e9e4df1a.MauiApplication.__md_methods);
		
	}
}
