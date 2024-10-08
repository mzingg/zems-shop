rootProject.name = "zems.shop"

pluginManagement {
    repositories {
        mavenLocal()
        maven("https://repo.spring.io/milestone")
        mavenCentral()
        gradlePluginPortal()
    }
}

include("app")
