Sample Web Preview Plugin for Share
===================================

This project implements a sample Web Previwer plugin for Alfresco Share. It 
was developed by Will Abson as an example implementation for the Alfresco
Developer Conference 2012.

To build and deploy the project into a local Tomcat instance for testing, use
the Ant build script supplied.

    ant hotcopy-tomcat-jar -Dtomcat.home=/opt/Alfresco/tomcat

Where `tomcat.home` is the location of your local Tomcat instance where the
Share webapp `share.war` is deployed.

