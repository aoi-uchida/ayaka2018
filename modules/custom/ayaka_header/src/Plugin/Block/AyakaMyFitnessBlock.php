<?php
/**
 * @file
 * Contains \Drupal\ayaka_header\Plugin\Block\XaiBlock.
 */

namespace Drupal\ayaka_header\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a 'ayaka_my_fitness' block.
 *
 * @Block(
 *   id = "ayaka_my_fitness_block",
 *   admin_label = @Translation("Ayaka My Fitness Block"),
 *   category = @Translation("Custom block")
 * )
 */
class AyakaMyFitnessBlock extends BlockBase {
  
  public function build() {
    return array(
      '#theme' => 'ayaka_my_fitness',
    );
  }
} 
