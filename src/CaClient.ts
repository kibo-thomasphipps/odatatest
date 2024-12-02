// /* eslint-disable functional/no-class */
// import axios, { AxiosInstance } from 'axios';

// export class ChannelAdvisorClient {
//     private clientId: string;
//     private clientSecret: string;
//     private refreshToken: string;
//     private accessToken: string | null;
//     private apiClient: AxiosInstance;
  
//     constructor(clientId: string, clientSecret: string, refreshToken: string) {
//       this.clientId = clientId;
//       this.clientSecret = clientSecret;
//       this.refreshToken = refreshToken;
//       this.accessToken = null;
//       this.apiClient = axios.create({
//         baseURL: 'https://api.channeladvisor.com/v1/',
//       });
//     }
  
//     // Authenticate with ChannelAdvisor and get an access token
//     private async authenticate(): Promise<void> {
//       if (this.accessToken) return; // Skip if already authenticated
  
//       try {
//         const response = await axios.post(
//           'https://api.channeladvisor.com/oauth2/token',
//           new URLSearchParams({
//             grant_type: 'refresh_token',
//             refresh_token: this.refreshToken,
//             client_id: this.clientId,
//             client_secret: this.clientSecret,
//           }),
//           {
//             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//           }
//         );
  
//         this.accessToken = response.data.access_token;
  
//         // Update API client with the token
//         this.apiClient.defaults.headers.common['Authorization'] = `Bearer ${this.accessToken}`;
//       } catch (error:any) {
//         throw new Error(`Failed to authenticate: ${error.response?.data?.error_description || error.message}`);
//       }
//     }
  
//     // Fetch a single order by ID
//     public async getOrder(orderId: any): Promise<QOrder> {
//       await this.authenticate(); // Ensure the token is valid
  
//       try {
//         const response = await this.apiClient.get(`/Orders(${orderId})?exported=false&$expand=Items($expand=OrderItemAttributes),Fulfillments($expand=Items)`);
//         return response.data;
//       } catch (error:any) {
//         throw new Error(`Failed to fetch order: ${error.response?.data?.error || error.message}`);
//       }
//     }
  
//     public async getOrders({}): Promise<readonly QOrder[]> {
//       await this.authenticate(); // Ensure the token is valid
  
//       try {
//         const response = await this.apiClient.get(`/Orders?exported=false&$expand=Items($expand=OrderItemAttributes),Fulfillments($expand=Items)`);
//         return response.data?.value;
//       } catch (error:any) {
//         throw new Error(`Failed to fetch order: ${error.response?.data?.error || error.message}`);
//       }
//     }
  
//     // Example for listing orders (can be extended further)
//     public async listOrders(): Promise<any> {
//       await this.authenticate(); // Ensure the token is valid
  
//       try {
//         const response = await this.apiClient.get('/Orders');
//         return response.data;
//       } catch (error:any) {
//         throw new Error(`Failed to list orders: ${error.response?.data?.error || error.message}`);
//       }
//     }
//   }