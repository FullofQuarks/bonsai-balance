FROM mcr.microsoft.com/dotnet/runtime:5.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["BonsaiBalance.Api/BonsaiBalance.Api/BonsaiBalance.Api.csproj", "BonsaiBalance.Api/"]
RUN dotnet restore "BonsaiBalance.Api/BonsaiBalance.Api/BonsaiBalance.Api.csproj"
COPY . .
WORKDIR "/src/BonsaiBalance.Api"
RUN dotnet build "BonsaiBalance.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BonsaiBalance.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BonsaiBalance.Api.dll"]
