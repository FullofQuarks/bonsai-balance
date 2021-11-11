FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["BonsaiBalance.Api.csproj", "BonsaiBalance.Api/"]
RUN dotnet restore "BonsaiBalance.Api/BonsaiBalance.Api.csproj"
COPY . "BonsaiBalance.Api"
WORKDIR "/src/BonsaiBalance.Api"
RUN dotnet build "BonsaiBalance.Api.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BonsaiBalance.Api.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 80
ENTRYPOINT ["dotnet", "BonsaiBalance.Api.dll"]
