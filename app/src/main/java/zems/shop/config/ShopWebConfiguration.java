package zems.shop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.function.RouterFunction;
import zems.config.AbstractZemsWebConfiguration;
import zems.core.contentbus.TransactionalContentBus;

@Configuration
@EnableWebMvc
public class ShopWebConfiguration extends AbstractZemsWebConfiguration {

    @Autowired
    public ShopWebConfiguration(TransactionalContentBus contentBus, @Qualifier("contentBusUrl") String contentBusUrl) {
        super(contentBus, contentBusUrl);
    }

    @Override
    public String canvas() {
        return "zems/shop/page";
    }

    @Bean
    public RouterFunction<?> routeDefinition() {
        return routeBuilder().build();
    }

}
