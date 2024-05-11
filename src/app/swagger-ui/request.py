
import requests

# URL de la API
url = "http://localhost:3005/api/productos"

# Token de autenticación
token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2NjMxYTI0OWI1YmUzMmI1NTZhNGZkNjkiLCJpYXQiOjE3MTQ5MjY5NjMsImV4cCI6MTcxNDk3MDE2M30.S7JTO_JD3iR1K8qUV9zEPQeCnN9hcLEQRcq3npKdObk"

# Encabezados de la solicitud
headers = {
    "Authorization": f"Bearer {token}",
    "Content-Type": "application/json"
}

# Realizar la solicitud GET (o cualquier otro método que necesites)
response = requests.get(url, headers=headers)

# Verificar la respuesta
if response.status_code == 200:
    # La solicitud fue exitosa
    data = response.json()
    print(data)
elif response.status_code == 401:
    # No autorizado - error de autenticación
    print("Error de autenticación: No se proporcionó un token en la solicitud.")
else:
    # Otro tipo de error
    print(f"Error: {response.status_code}")
    print(response.text)

